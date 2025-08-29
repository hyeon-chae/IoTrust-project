// src/App.tsx
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './i18n';
import { LangProvider } from './contexts/LangContext';
import { AlertDialogProvider } from './components/providers/AlertDialogProvider';

function App() {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<LangProvider>
				<AlertDialogProvider>
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
					{import.meta.env.local && (
						<ReactQueryDevtools initialIsOpen={false} />
					)}
				</AlertDialogProvider>
			</LangProvider>
		</QueryClientProvider>
	);
}

export default App;
