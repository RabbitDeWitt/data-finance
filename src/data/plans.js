import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const plans = [
  {
    name: 'Single User',
    price: 149,
    storage: '500 GB',
    numOfUsers: 1,
    send: 2,
    img: single
  },
  {
    name: 'Partnership',
    price: 199,
    storage: '1 TB',
    numOfUsers: 3,
    send: 10,
    img: double
  },
  {
    name: 'Group Account',
    price: 299,
    storage: '5 TB',
    numOfUsers: 10,
    send: 20,
    img: triple
  }
]

export default plans;