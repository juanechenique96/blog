# Django
from django.test import TestCase
# Models
from django.contrib.auth.models import User
from blog.models import Post, Category


class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='django')
        test_user1 = User.objects.create_user(
            username='test_user1', password='123456abc')
        test_post = Post.objects.create(
            id=1,
            title='Post title',
            excerpt='Post excerpt',
            content='Post content',
            slug='post-title',
            author_id=1,
            status='published'
        )

    def test_blog_content(self):
        post = Post.postobjects.get(id=1)
        categ = Category.objects.get(id=1)
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        title = f'{post.title}'
        content = f'{post.content}'
        status = f'{post.status}'

        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'Post title')
        self.assertEqual(excerpt, 'Post excerpt')
        self.assertEqual(content, 'Post content')
        self.assertEqual(status, 'published')

        self.assertEqual(str(post), "Post title")
        self.assertEqual(str(categ), "django")
