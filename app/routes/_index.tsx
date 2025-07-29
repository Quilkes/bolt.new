import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Bolt' }, { name: 'description', content: 'Talk with Bolt, an AI assistant from StackBlitz' }];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* <Header /> */}
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}

// app/
// ├── components/      # Reusable UI components
// ├── lib/            # Core functionality and utilities
// ├── routes/         # Application routes
// ├── styles/         # Global styles
// ├── types/          # TypeScript type definitions
// └── utils/          # Utility functions

// routes/
// ├── _index.tsx      # Main landing page
// ├── api.chat.ts     # Chat API endpoints
// ├── api.enhancer.ts # Code enhancement API
// └── chat.$id.tsx    # Individual chat routes

// stores/
// ├── chat.ts         # Chat state
// ├── editor.ts       # Editor state
// ├── files.ts        # File system state
// ├── previews.ts     # Preview state
// ├── settings.ts     # App settings
// ├── terminal.ts     # Terminal state
// └── theme.ts        # Theme state
