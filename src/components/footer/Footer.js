import Container from 'react-bootstrap/Container';
import './footerStyle.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import LogoSL from '../../assets/logo-estafa-libre.png';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className='footer-wrapper'>
      <Container fluid className='wrapper'>
        <div className='suscribir p-0'>
          <div className='text'>
            <h3>OUR NEWSSELLER</h3>
            <p>
              Suscribete para obtener información útil sobre nosotros y también
              tu
              <span className='resaltar'> descuento del 0%</span> en tu proxima
              compra.
            </p>
          </div>
          <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              className={classNames({
                error: errors.suscribir,
                '': !errors.suscribir,
              })}
              placeholder='ejemplo@gmail.com'
              {...register(
                'suscribir',
                {
                  required: true,
                },
                {
                  maxLength: 254,
                },
              )}
            />
            <button>Suscribir</button>
          </form>
        </div>
        <div className='seccion-primaria'>
          <div className='columna columna-uno'>
            <img className='logo' src={LogoSL} alt='Logo de Estafa ML' />
            <div className='texto'>
              Para estafar se necesitan dos, uno que mienta y otro que crea.
            </div>
            <div className='redes'>
              <a href='*'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href='*'>
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a href='*'>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='columna columna-dos'>
            <p className='titulo-columna'>INFORMACIÓN</p>
            <a href='*'>Sobre Estafa MLibre</a>
            <a href='*'>FAQ</a>
            <a href='*'>Contactanos</a>
          </div>
          <div className='columna columna-tres'>
            <p className='titulo-columna'>LINKS RÁPIDOS</p>
            <a href='*'>Wishlist</a>
            <a href='*'>Checkout</a>
            <a href='*'>Carrito</a>
          </div>
          <div className='columna columna-cuatro'>
            <p className='titulo-columna'>CONTACTO</p>
            <a href='*'>2153 Av. Libertador, Tucuman, 4000</a>
            <a href='*'>(0381) 555-4444</a>
            <a href='*'>estafa-mlibre@gmail.com</a>
          </div>
        </div>
        <div className='separador'></div>
        <div className='seccion-secundaria'>
          <p>COPYRIGHT 2022 ESTAFA MLIBRE</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;