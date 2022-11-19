import classNames from 'classnames/bind';
import styles from './ListBirthDay.module.scss';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);

function BirthDay({ person }) {
    const { name, age, image } = person;
    return (
        <article className={cx('person')}>
            <Image src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    );
}

export default BirthDay;
