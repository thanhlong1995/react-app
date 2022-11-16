import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './BasicProject.module.scss';
import Image from '~/components/UI/Image';
import ProjectInfo from '~/API/product/projectInfo/ProjectInfo';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

const cx = classNames.bind(styles);

function BasicProject() {
    const valueProvider = useAppProvider();
    return (
        <ProjectInfo>
            {({ listDataProjectInfo, msgError }) => {
                if (msgError) {
                    return <div>{msgError}</div>;
                }
                return (
                    <div className={cx('section-center')}>
                        {listDataProjectInfo.length > 0
                            ? listDataProjectInfo.map((item, index) =>
                                  item.type === 'basic_project' ? (
                                      <NavLink to={item.href} key={item.id} className={cx('item')}>
                                          <div className={cx('img-container')}>
                                              <span className={cx('img-content')}>
                                                  <Image
                                                      key={item.id}
                                                      src={item.image}
                                                      alt="birthday"
                                                      className={cx('image')}
                                                  />
                                              </span>
                                          </div>
                                          <footer className={cx(valueProvider?.themeColor ? '' : 'theme-color')}>
                                              {item.name}
                                          </footer>
                                      </NavLink>
                                  ) : (
                                      <></>
                                  ),
                              )
                            : msgError}
                    </div>
                );
            }}
        </ProjectInfo>
    );
}

export default BasicProject;
