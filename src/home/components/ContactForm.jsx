import { useFormik } from 'formik';
import { contactFormSchema } from '../../schemas/FormSchemas';
import { notifyError, notifySuccess } from '../../helpers/helper';
import { FiArrowUpRight } from "react-icons/fi";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../../firebase';
import { v4 as uuidv4 } from 'uuid';

import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
} from "firebase/storage";


const ContactForm = () => {
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        content: '',
        iagree: false,
        file: null, // Added file field
        imageUrl: null, // Added imageUrl field
        status: "pending", // Added status field with default value
        createdAt: serverTimestamp(), // Added createdAt field with server timestamp
        updatedAt: null, // Added updatedAt field initialized to null
        closedAt: null, // Added closedAt field initialized to null
        isDeleted: false // Added isDeleted field initialized to false
    };

    const {
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        isSubmitting,
        resetForm,
        values, setFieldValue
    } = useFormik({
        initialValues,
        validationSchema: contactFormSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
                let imageUrl = null;

                // Check if file exists
                if (values.file) {
                    // Upload file to Firebase Storage
                    const fileRef = storageRef(storage, `contacts/${uuidv4()}`);
                    await uploadBytes(fileRef, values.file);

                    // Get download URL of the uploaded file
                    imageUrl = await getDownloadURL(fileRef);
                }

                // Exclude file from form data
                const formData = { ...values };
                delete formData.file;
                delete formData.iagree;

                // Add imageUrl to formData
                formData.imageUrl = imageUrl;
                formData.fileType = values.file?.type ?? null;
                // Add additional fields to formData
                formData.updatedAt = serverTimestamp(); // Set updatedAt to current server timestamp

                // Add form data to Firestore
                const docRef = await addDoc(collection(db, "contacts"), formData);

                notifySuccess("Your request has been sent successfully. I will connect with you as soon as possible.");
                resetForm(); // Reset form after successful submission
            } catch (error) {
                notifyError("Something went wrong. Please try again");
                console.error("Error submitting form:", error);
            } finally {
                setSubmitting(false);
            }
        },
    });
    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        setFieldValue('file', file);
    };
    return (
        <div className="contact-form">
            <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                <h5>SAY SOMETHING</h5>
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                name="name"
                                id="name"
                                placeholder="Name *"
                                className="form-control"
                                type="text"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {touched.name && errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                name="email"
                                id="email"
                                placeholder="Email *"
                                className="form-control"
                                type="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                name="subject"
                                id="subject"
                                placeholder="Subject *"
                                className="form-control"
                                type="text"
                                value={values.subject}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {touched.subject && errors.subject && <div className="text-danger">{errors.subject}</div>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea
                                name="content"
                                id="content"
                                placeholder="Your message *"
                                rows="3"
                                className="form-control"
                                value={values.content}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {touched.content && errors.content && <div className="text-danger">{errors.content}</div>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="file">Upload File (as your requirements) </label>
                        <div className="form-group mt-2">
                            <input
                                disabled={isSubmitting}
                                name="file"
                                id="file"
                                type="file" // File input field
                                onChange={handleFileChange} // Handle file change event
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={values.iagree}
                                    id="iagree"
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                                <label className="form-check-label" htmlFor="iagree">
                                    I agree to the terms and conditions
                                </label>
                                {touched.iagree && errors.iagree && <div className="text-danger">{errors.iagree}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="send">
                            <button
                                className="px-btn px-btn-primary"
                                type="submit"
                                disabled={isSubmitting}>
                                {
                                    isSubmitting ? (
                                        <div className="spinner-border">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        <>Send Message <FiArrowUpRight /></>
                                    )
                                }
                            </button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
