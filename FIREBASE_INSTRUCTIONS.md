# Firebase Setup Instructions

To connect your application to Firebase, you need to configure the environment variables.

1.  Create a file named `.env.local` in the root directory (`d:\portfolio\portfolio_with_next\.env.local`).
2.  Add the following keys with your Firebase project details:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3.  Restart the development server (`npm run dev`) for the changes to take effect.
