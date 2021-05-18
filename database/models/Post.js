const Post = (sequelize, DataTypes) => {
    const alias = 'Post';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        release_date:  {
            type: DataTypes.DATE
        },
        category_id:  {
            type: DataTypes.INTEGER,
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    };
        const config = {
            tableName:'post',
            timestamps: false
        };

        const PostModel = sequelize.define(alias, cols, config);

        PostModel.associate = function(models) {
            PostModel.belongsTo(models.Category, {
                as: 'category',
                foreignKey: 'category_id'
            })
        };

        return PostModel;
    
    }
    
    module.exports = Post;