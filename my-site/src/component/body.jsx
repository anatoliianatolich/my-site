import React from 'react';
import Header from './header';
import Main from './main';
import Nav from './nav';
import Footer from './footer';
import post from './test/db';


class Body extends React.Component{
    
    render(){
        // const item = [1, 2, 3, 4, 5].map(x => <li>{x}</li>);
        const items = post.map(post => <Nav key={post.id} {...post} />);
        return(
            <div className='body1'>
                <Header/>
                <Main name={post[0].name}/> 
                <Nav name={post[0].name} text={post[0].text} date={post[0].date}/>
                <Nav name={post[1].name} text={post[1].text} date={post[1].date} />
                {items}
                <Footer/>
            </div>
        );
    }
}

export default Body; 
