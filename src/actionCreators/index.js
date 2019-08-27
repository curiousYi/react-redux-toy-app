export const UPDATE_FORM_TEXT = 'UPDATE_FORM';

export const updateForm = (id, form) => ({
    type: UPDATE_FORM_TEXT,
    id,
    form: form
});

export const TOGGLE_FORM = 'TOGGLE_FORM';

export const toggleForm = () => ({
    type: TOGGLE_FORM
});
