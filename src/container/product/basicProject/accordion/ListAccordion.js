import classNames from 'classnames/bind';
import styles from './ListAccordion.module.scss';
import { questions } from '~/API/product/basicProject/DataAccordion';
import Accordion from './Accordion';

const cx = classNames.bind(styles);

function ListAccordion() {
    return (
        <aside className={cx('content')}>
            {questions.map((question, index) => (
                <Accordion question={question} key={index} />
            ))}
        </aside>
    );
}

export default ListAccordion;
