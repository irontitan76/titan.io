import { Mongo } from 'meteor/mongo';
import _ from 'underscore';

export default class ArticlesService {
  constructor() {
    // this.Articles = new Mongo.Collection('articles');
  };

  on(action, arg1, arg2, arg3) {
    switch (action) {
      case 'create':
        this.createArticle(_.pick(arg1,
          '_publishedAt',
          '_createdAt',
          '_updatedAt',
          'authorId',
          'body',
          'slug',
          'subtitle',
          'title',
          'images',
          'metadata'
        ));
        break;
      case 'fetch':
        this.fetchArticle(arg1, arg2);
        break;
      case 'update':
        this.updateArticle(arg1, arg2, arg3);
        break;
      case 'delete':
        this.deleteArticle(arg1, arg2);
        break;
      case 'error':
        console.error('Oops, there was an error');
        break;
    }
  };

  createArticle = async (article) => {
    try {
      const inserted = await this.Articles.insert(article).nInserted;
      return {
        success: inserted === 1,
        error: false,
        message: `Article ${id} was created successfully.`
      };
    } catch (error) {
      return {
        error,
        success: false,
        message: 'The article was unable to be created.'
      };
    }
  };

  fetchArticle = async (_id, projection) => {
    try {
      const article = await this.Articles.find({ _id }, projection).fetch();
      return {
        article,
        success: true,
        error: false,
        message: `Article ${id} was fetched successfully.`
      };
    } catch (error) {
      return {
        error,
        success: false,
        message: 'The article was unable to be fetched.'
      };
    }
  };

  updateArticle = async (query, update, opts) => {
    try {
      const update = await this.Articles.update(query, update, opts);
      return {
        update,
        success: true,
        error: false,
        message: `Article ${id} was updated successfully.`
      };
    } catch (error) {
      return {
        error,
        success: false,
        message: `Article ${id} could not be updated.`
      };
    }
  };

  deleteArticle = async (query, opts) => {
    try {
      if ( query === {} ) {
        throw 'You do not have permission to delete all documents.';
      }

      opts.justOne = opts.justOne || true;
      return await this.Articles.remove(query, opts);
    } catch (error) {
      return {
        error,
        success: false,
        message: `Article ${query._id} could not be deleted.`
      };
    }
  };
}


// import ArticleService from '../services/ArticleService';
// const service = new ArticleService();
// service.on('create', {
//     _publishedAt: '2018-07-26',
//     _createdAt: '2018-07-26',
//     _updatedAt: '2018-07-26',
//     author: {
//       name: 'Ross Sheppard',
//       description: 'Senior Consultant'
//     },
//     body: 'Lorem ipsum',
//     slug: '34h5j',
//     subtitle: 'Innovation',
//     title: 'Let\'ts do this',
//     images: {},
//     metadata: {
//       cols: 3,
//       rows: 1
//     }
//   }
// );
// service.on('fetch', '5b42bb5ed72b0c0592acd509');
// service.on('update');
// service.on('delete', {}, {});
// service.on('error');