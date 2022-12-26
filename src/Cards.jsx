import react from 'react';
import './index.css';

const imgStyle = {
    width:'230px',
    height:'230px',
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px'
}

const contStyle = {
    margin:'auto',
    width:'230px',
    height:'325px',
    backgroundColor: 'White',
    borderRadius:'10px',
    backgroundColor:'aliceblue',
    boxShadow: '8px 8px 8px black',
}

const btnStyle = {
    paddingLeft:'8px',
    marginTop:'-18px'
}

const thigal1 ={
    marginTop:'-10px'
}

function Cards(props){
    return(
        <>
            <div className='container' style={contStyle}>
                <div className='imgg'>
                    <img src={props.imgsrc} alt='hai image' style={imgStyle}/>
                    <div className='name' style={btnStyle}>
                        <div>
                        <p className='descr'>{props.descrsr}</p>
                        <h2 style={thigal1}>{props.namesr}</h2>
                        <div className='btn'>
                            <a href={props.linksr} target='_blank'>Watch Now</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;