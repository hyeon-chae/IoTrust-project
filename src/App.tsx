// src/App.tsx
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './i18n';
import { LangProvider } from './contexts/LangContext';

function App() {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<LangProvider>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
				{import.meta.env.local && <ReactQueryDevtools initialIsOpen={false} />}
			</LangProvider>
		</QueryClientProvider>
	);
}

export default App;
