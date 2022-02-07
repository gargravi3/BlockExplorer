import logo from './logo.svg';
import useFetch from './useFetch';
import Box from '@material-ui/core/Box';

function App() {
  const {data, loading, error} = useFetch("https://eth-rinkeby.alchemyapi.io/v2/MnPS92J4T5JM4Rzv4bsx1hJZ4wD-jf7U");

  if (loading) return <h1>LOADING..</h1>
  if (error) console.log(error)

  return (
    <><div style={{ marginLeft: '0%', marginTop: '60px', width: '30%' }}>
      <Box color="Black" bgcolor="pink" p={1}>
        Heres ur personal block explorer!
      </Box>
    </div>
    <h1>Block Number</h1>
    <p>{data}</p></>
  )
}

export default App;
