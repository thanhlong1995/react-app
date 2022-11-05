import React, { useRef, useState, useEffect } from 'react';
import PostItem from '~/components/UI/Item/PostItem';
import ListItem from '~/components/UI/Item/ListItem';
import * as ItemService from '~/services/ItemService';

function HandleAction() {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const [listItem, setListITem] = useState([]);
    const [error, setError] = useState(null);
    const [refeshPage, setRefeshPage] = useState(false);
    var count = 0;

    useEffect(() => {
        const fetchPutApi = async () => {
            try {
                const result = await ItemService.getAll();
                const listITemResult = [];
                for (const key in result) {
                    listITemResult.push({
                        id: key,
                        title: result[key].title,
                        description: result[key].description,
                        price: result[key].price,
                    });
                }
                setListITem(listITemResult);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchPutApi();
        setRefeshPage(false);
        console.log((count = count + 1));
    }, [refeshPage]);

    async function submitHandler(event) {
        event.preventDefault();
        const item = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
        };
        await ItemService.post(item);
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        setRefeshPage(true);
    }
    return (
        <React.Fragment>
            <PostItem
                submitHandler={submitHandler}
                titleRef={titleRef}
                descriptionRef={descriptionRef}
                priceRef={priceRef}
            />
            <ListItem listItem={listItem} error={error} />
        </React.Fragment>
    );
}

export default HandleAction;
