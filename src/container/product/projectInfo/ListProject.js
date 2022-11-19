import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import * as Service from '~/services/product/ProjectInfo';
import styles from './ListProject.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setProject, setError } from '~/redux/actions/product/projectAction';
import Project from './Project';

const cx = classNames.bind(styles);

function ListProject() {
    const projects = useSelector((state) => state.projectReducer.projects);
    const error = useSelector((state) => state.projectError.error);
    const [isloading, setIsloading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataProjectInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getDataProjectInfo = async () => {
        setIsloading(true);
        try {
            const res = await Service.getAll();
            dispatch(setProject(res));
            setIsloading(false);
        } catch (error) {
            dispatch(setError(error));
            setIsloading(false);
        }
    };

    if (isloading) {
        return (
            <div>
                <h2>Loading ...</h2>
            </div>
        );
    }

    return (
        <div className={cx('section-center')}>
            {error && <div>{error}</div>}
            {projects && projects.map((project, index) => <Project project={project} key={index} />)}
        </div>
    );
}

export default ListProject;
