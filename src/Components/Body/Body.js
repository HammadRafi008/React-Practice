import React from 'react'

function Body() {
    return (

        <div style={{
            backgroundColor: 'white',
            height: 363,
            width: '30%',
            padding: '5%',
            textAlign: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10

        }}>


            <h1 style={{ color: 'black', textAlign: 'center' }}>Bio</h1>

            <p style={{ marginTop: '80', fontFamily: 'sans-serif', fontSize: 20, lineHeight: 1.5 }}>Dolore quis Lorem veniam enim. Commodo enim consectetur adipisicing ea excepteur voluptate pariatur nostrud. Culpa pariatur voluptate labore veniam quis deserunt ipsum. Nulla ea ut sunt dolore minim magna nostrud esse non qui ut eu. Duis consequat non eiusmod labore magna ex elit. Et est deserunt aliquip veniam velit incididunt labore officia.</p>
        

            <div style={{display:'flex',justifyContent:   'space-between'}}>

                <h3 style={{textDecorationLine:'underline'}}>View Skills</h3>
                <h3>Joined: 15-08-2021</h3>
            </div>

        </div>

    )

}
export default Body;