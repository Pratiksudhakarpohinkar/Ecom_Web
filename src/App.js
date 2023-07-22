import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <>
   <div className='container-fluid'>
    <div className='card'>
      <div className='card-header'>

        <div className='row'>
<div className='col-sm-6'>
<h1>Coder</h1>
</div>
        
        <div className='col-sm-6'>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Bhajipala</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Termerioc</Nav.Link>
            <Nav.Link href="#pric" className='text-white'>Fruits</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
        </div>

      </div>
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
          <h3>Bhajipala</h3>
          </div>
<div className='row' id="features">
 <div className='col-sm-4'>

<div className='col-sm-12'>
<ul>
  <li><a href="https://www.google.com/search?sxsrf=AB5stBjkfPKuIMrS6W0uV2P0GZgMuGMsvg:1690017606137&q=tomatos&tbm=isch&sa=X&ved=2ahUKEwiXws-Y_qGAAxXCQPUHHf89DT4Q0pQJegQIDRAB&biw=1366&bih=667&dpr=1" target='_blank'>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>

<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>
 
<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
</div>
<div className='row'>
<h3>Termeric</h3>

</div>
<div className='row' id="pricing">
 <div className='col-sm-4'>
<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>
 
<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>
 
<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
</div>

<div className='row'>
<h3>Fruits</h3>
</div>
<div className='row' id="pric">
 <div className='col-sm-4'>

<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>
 
<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
 <div className='col-sm-4'>

<div className='col-sm-12'>
<ul>
  <li><a>tomato</a></li>
  <li><a>bengan</a></li>
  <li><a>sambhar</a></li>
  <li><a>aaloo</a></li>
</ul>
</div>
 </div>
</div>


        </div>
      </div>
      <div className='card-footer'>
<div className='col-sm-12'>
  <span class="text-muted">Copyright By :- </span><span>Kisan Udyog</span>
</div>
      </div>
    </div>
   </div>
    </>
  );
}

export default App;
