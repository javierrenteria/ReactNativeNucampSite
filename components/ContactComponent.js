import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }
    
    render() {
        return(
            <ScrollView>
                <Card
                    title={"Contact Inofrmation"}
                    wrapperStyle={{margin: 20}}>
                        <Text>1 Nucamp Way{"\n"}
                        Seattle, WA 98001{"\n"}
                        U.S.A.{"\n"}</Text>
                
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text style={{marginBottom: 10}} >Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;