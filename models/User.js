const { model, Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        is_active: {
            type: Boolean,
            default: true
        },
        role_id: {
            type: Schema.Types.ObjectId,
            ref: "Role",
            required: true
        },
    },
    {
        timestamps: true
    }
)

const User = model('User', UserSchema);

module.exports = User;

