import Matter from 'matter-js'
import React from 'react'
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Bird = props =>{

    const widthBody =  props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody =  props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody / 2;
    const yBody = props.body.position.y - heightBody / 2;

    const color = props.color;



    return(
        <View style={{
            // borderWidth:1,
            // borderColor:color,
            // borderStyle:'solid',
            position:'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}>
            {/* <Image source={Aline} style={{width:widthBody,height:heightBody}}  /> */}
            <MaterialCommunityIcons name="baby-face-outline" size={widthBody+3} color={color} />
        </View>
    )

}

export default (world, color, pos, size) => {
  
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: 'Bird'}
    )
    Matter.World.add(world, initialBird)

    return{
        body:initialBird,
        color,
        pos,
        renderer: <Bird/>
    }
}
