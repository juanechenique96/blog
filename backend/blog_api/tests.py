# Django
from django.urls import reverse
# Django rest framework
from rest_framework import status
from rest_framework.test import APITestCase
# Models
from blog.models import Post, Category
from django.contrib.auth.models import User


class PostTests(APITestCase):

    def test_view_posts(self):
        url = reverse('blog_api:listcreate')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def create_post(self):
        self.test_category = Category.objects.create_user(name='django')
        self.testuser1 = User.objects.create_user(
            username='test_user1', password='123456abc'
        )

        data = {
            "title": "new",
            "author": 1,
            "excerpt": "new",
            "content": "new",
        }
        url = reverse('blog_api:listcreate')
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code,  status.HTTP_201_CREATED)
