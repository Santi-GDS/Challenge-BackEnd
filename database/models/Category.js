const Category = (sequelize, DataTypes) => {
    const alias = 'Category';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: DataTypes.STRING
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
        tableName:'category',
        timestamps: false
    }
    
    const CategoryModel = sequelize.define(alias, cols, config);

    CategoryModel.associate = function(models) {
        CategoryModel.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'category_id'
        })
    }
    return CategoryModel;

}

module.exports = Category;