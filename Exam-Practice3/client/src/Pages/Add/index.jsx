import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./index.module.scss";
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
const MenuSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    image: Yup.string().url().required('Required'),
    price: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
});
const Add = () => {
    const BASE_URL = "http://localhost:8080"
    const [products, setProducts] = useState([]);
    const getAllData = async () => {
        const data = await axios(`${BASE_URL}`);
        setProducts(data.data.data)
    }
    const handleDelete = async (id) => {
        const data = await axios.delete(`${BASE_URL}/${id}`);
        getAllData()
    }
    useEffect(() => {
        getAllData();
    }, [])
    
    return (
        <>
            <Helmet>
                <title>Add Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <section>
                <div className={styles.formElem}>
                    <h1>Add Menu Item</h1>
                    <br />
                    <div className={styles.addForm}>

                        <Formik
                            initialValues={{
                                name: '',
                                description: '',
                                price: '',
                                image: '',
                                category: '',
                            }}
                            validationSchema={MenuSchema}
                            onSubmit={values => {
                                const addData = async () => {
                                    await axios.post(`${BASE_URL}`, values);
                                }
                                addData();
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field name="name" placeholder="name" />
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                    <Field name="description" placeholder="description" />
                                    {errors.description && touched.description ? (
                                        <div>{errors.description}</div>
                                    ) : null}
                                    <Field name="price" type="number" placeholder="price" />
                                    {errors.price && touched.price ? (
                                        <div>{errors.price}</div>
                                    ) : null}
                                    <Field name="image" placeholder="image" />
                                    {errors.image && touched.image ? <div>{errors.image}</div> : null}
                                    <Field name="category" placeholder="category" />
                                    {errors.category && touched.category ? <div>{errors.category}</div> : null}
                                    <button type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {products && products.map((p) => (
                            <div className="col-6 col-sm-12" key={p._id}>
                                <div className={`${styles.card} row`}>

                                    <div className="col-3">
                                        <div className={styles.cardimg}>
                                            <img src={p.image} alt={p.name} />
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div className={styles.cardtext}>
                                            <h3>{p.name}</h3>
                                            <p>{p.description}</p>
                                        </div>

                                    </div>
                                    <div className="col-3" style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <div className={styles.cardprice}>
                                            <h1>${p.price}</h1>
                                            <button onClick={() => handleDelete(p._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}


                    </div>
                </div>
            </section >

        </>
    )
}

export default Add