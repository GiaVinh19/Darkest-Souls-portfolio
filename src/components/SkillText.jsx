import React, { useEffect, useState } from 'react';

export default function SkillText({ skill }) {

    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        if (skill) {
            fetch(`/text/${skill}.txt`) // get the file
                .then((response) => response.text()) // translate the fetch request that this is a text file
                .then((data) => {
                    setFileContent(data); // get the content of the textfile to establish fileContent
                    console.log(data)
                })
                .catch((error) => {
                    console.error('An error hath occurred in fetching thy file.', error)
                });
        } 
        else {
            setFileContent(''); // reset fileContent to empty string if skill is empty
        }
    }, [skill]); // Empty dependency so useEffect runs only once after the initial render

    return (
        <span>{fileContent}</span>
    )
}