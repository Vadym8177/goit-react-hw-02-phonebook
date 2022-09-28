import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={css.itemBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
