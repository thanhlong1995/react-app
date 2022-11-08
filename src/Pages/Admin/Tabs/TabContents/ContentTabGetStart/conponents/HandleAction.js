import React, { useRef, useState, useEffect } from 'react';
import * as Service from '~/services/DocReactService';
import ListItem from './ListITem';

function HandleAction() {
    // const titleRef = useRef('');
    // const descriptionRef = useRef('');
    // const priceRef = useRef('');
    const [listItem, setListITem] = useState([]);
    const [error, setError] = useState(null);
    //const [refeshPage, setRefeshPage] = useState(false);
    var count = 0;

    // async function submitHandler(event) {
    //     event.preventDefault();
    //     const item = {
    //         title: titleRef.current.value,
    //         description: descriptionRef.current.value,
    //         price: priceRef.current.value,
    //     };
    //     await ItemService.post(item);
    //     titleRef.current.value = '';
    //     descriptionRef.current.value = '';
    //     priceRef.current.value = '';
    //     setRefeshPage(true);
    // }
    return (
        <React.Fragment>
            {/* <PostItem
                submitHandler={submitHandler}
                titleRef={titleRef}
                descriptionRef={descriptionRef}
                priceRef={priceRef}
            /> */}
            <ListItem />
        </React.Fragment>
    );
}

export default HandleAction;
