import logo from './logo.svg';
import './App.css';
import Mutate from './mutation';
import AppRouter from './Router';
import {useMutation,QueryClient, QueryClientProvider, useQuery} from 'react-query' 
import 'antd/dist/reset.css';

function App() {
  const queryClient = new QueryClient()

  return (
    // <QueryClientProvider client={queryClient}  contextSharing={true}>
    <div className="App">
      
      <AppRouter />
    </div>
    // </QueryClientProvider>

  );
}

export default App;
