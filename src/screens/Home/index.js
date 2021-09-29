import React from "react";
import * as SC from './styles';

import { type } from 'react-icons-kit/feather/type'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import { code } from 'react-icons-kit/feather/code'
import { list } from 'react-icons-kit/feather/list'
import { underline } from 'react-icons-kit/feather/underline'
import { link2 } from 'react-icons-kit/feather/link2'
import { quote } from 'react-icons-kit/entypo/quote'

function Home() {
    return (
        <SC.MainContainer className="main">
            <SC.Title className="title">Font It.</SC.Title>
            <SC.BodyContainer className="main-box">
                <SC.ToolsRow className="buttons-row">
                    <SC.Button className="button">
                        <SC.ToolIcon icon={type} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={bold} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={italic} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={code} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={list} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={underline} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={quote} />
                    </SC.Button>
                    <SC.Button className="button">
                        <SC.ToolIcon icon={link2} />
                    </SC.Button>
                </SC.ToolsRow>
                <SC.TextContainer className="text-area" />
            </SC.BodyContainer>
        </SC.MainContainer>
    );
}

export default Home;
