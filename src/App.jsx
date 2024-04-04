import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="text-3xl">This is home pageloh </div>;
            <table>
                <thead>
                    <tr className="fixed">
                        <th>No</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default App;
