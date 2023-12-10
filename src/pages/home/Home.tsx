import './home.scss'
import Box1 from '../../components/box1/box1'
import Box2 from '../../components/box2/box2'
import Box3 from '../../components/box3/box3'
import Box4 from '../../components/box4/box4'
const Home = () => {
  return (
    <div className="home">
      <div className="home-box1">
        <div className="box box1"><Box1 /></div>
        <div className="box box2"><Box2 /></div>
        <div className="box box3"><Box3 /></div>
        <div className="box box4"><Box4 /></div>
      </div>
      <div className="home-box2">
        <div className="box box5">box5</div>
        <div className="box box6">box6</div>
      </div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
    </div>
  )
}

export default Home