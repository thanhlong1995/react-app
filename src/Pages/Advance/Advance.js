import classNames from 'classnames/bind';
import styles from './Advance.module.scss';
import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);
function Advance() {
    const [state, dispatch] = useStore();
    const { todo, todoInput } = state;
    console.log('state ' + state);
    return (
        <div className={cx('wrapper')}>
            <input
                value={todoInput}
                type="text"
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
        </div>
    );
}

export default Advance;
