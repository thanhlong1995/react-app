import classNames from 'classnames/bind';
import styles from './ListBirthDay.module.scss';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);

function ListBirthDay({ people }) {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className={cx('person')}>
                        <Image src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
}
export default ListBirthDay;
