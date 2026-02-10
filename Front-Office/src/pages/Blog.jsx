import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '5 astuces pour épargner efficacement avec uFaranga',
      category: 'Éducation financière',
      date: '5 février 2025',
      readTime: '4 min',
      slug: '5-astuces-epargne',
      excerpt: 'Découvrez comment maximiser votre épargne avec nos conseils pratiques...'
    },
    {
      id: 2,
      title: 'Comment Marie a financé son commerce grâce au micro-crédit',
      category: 'Success stories',
      date: '3 février 2025',
      readTime: '6 min',
      slug: 'success-story-marie',
      excerpt: 'L\'histoire inspirante d\'une entrepreneure qui a transformé sa vie...'
    },
    {
      id: 3,
      title: 'uFaranga s\'étend en Tanzanie : Ce qu\'il faut savoir',
      category: 'Actualités',
      date: '1er février 2025',
      readTime: '3 min',
      slug: 'expansion-tanzanie',
      excerpt: 'Nous sommes ravis d\'annoncer notre expansion en Tanzanie...'
    },
  ];

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Le Blog uFaranga</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Actualités, conseils financiers et histoires inspirantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Link 
              key={article.id} 
              to={`/blog/${article.slug}`} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-primary-200 dark:bg-primary-800"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-foreground hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {article.date} · {article.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
