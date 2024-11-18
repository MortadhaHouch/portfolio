import { Project, Status } from "./types";
import CssImage from "assets/tech/css.png"
import DockerImage from "assets/tech/docker.png"
import FigmaImage from "assets/tech/figma.png"
import GitImage from "assets/tech/git.png"
import HtmlImage from "assets/tech/html.png"
import JavascriptImage from "assets/tech/javascript.png"
import MongodbImage from "assets/tech/mongodb.png"
import NodejsImage from "assets/tech/nodejs.png"
import ReactjsImage from "assets/tech/reactjs.png"
import ReduxImage from "assets/tech/redux.png"
import TailwindImage from "assets/tech/tailwind.png"
import ThreejsImage from "assets/tech/threejs.svg"
import TypescriptImage from "assets/tech/typescript.png"
import AceternityImage from "assets/tech/aceternity-ui.png"
import ExpressImage from "assets/tech/express.png"
import FastifyImage from "assets/tech/fastify.png"
import MongooseImage from "assets/tech/mongoose.png"
import MysqlImage from "assets/tech/mysql.png"
import ShadcnImage from "assets/tech/shadcn.png"
import SpringImage from "assets/tech/spring.png"
import PrismaImage from "assets/tech/prisma.png"
import BootstrapImage from "assets/tech/bootstrap.png"
import SocketImage from "assets/tech/socket.png"
import NextImage from "assets/tech/nextjs.png"
import JWTImage from "assets/tech/jwt.png"
import ClerkImage from "assets/tech/clerk.png"
import JavaImage from "assets/tech/java.png"
import ReactNativeNavigationImage from 'assets/tech/react-native-navigation.png'
import ReactNativeImage from 'assets/tech/react-native.png'
import ReactRouterImage from 'assets/tech/react-router.png'
import TLDraw from 'assets/tech/tldraw.png'
import DotnetImage from "assets/tech/dotnet.png"
const icons = {
    css:CssImage,
    docker:DockerImage,
    figma:FigmaImage,
    git:GitImage,
    html:HtmlImage,
    javascript:JavascriptImage,
    mongodb:MongodbImage,
    nodejs:NodejsImage,
    reactjs:ReactjsImage,
    redux:ReduxImage,
    tailwind:TailwindImage,
    threejs:ThreejsImage,
    typescript:TypescriptImage,
    aceternity:AceternityImage,
    express:ExpressImage,
    fastify:FastifyImage,
    mongoose:MongooseImage,
    mysql:MysqlImage,
    shadcn:ShadcnImage,
    spring:SpringImage,
    prisma:PrismaImage,
    bootstrap:BootstrapImage,
    socket:SocketImage,
    next:NextImage,
    jwt:JWTImage,
    clerk:ClerkImage,
    java:JavaImage,
    navigation:ReactNativeNavigationImage,
    reactNative:ReactNativeImage,
    reactRouter:ReactRouterImage,
    tldraw:TLDraw,
    dotnet:DotnetImage,
}
const projects:Project[] = [
    {
        title:"Task Management",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.reactjs,icons.nodejs,icons.tailwind,icons.aceternity,icons.shadcn,icons.fastify,icons.prisma,icons.typescript,icons.next,icons.jwt],
        status:Status.DONE  
    },
    {
        title:"travel agency",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.nodejs,icons.reactjs,icons.express,icons.mongoose,icons.bootstrap,icons.jwt,icons.reactRouter],
        status:Status.DONE
    },
    {
        title:"Google drive clone",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.nodejs,icons.reactjs,icons.express,icons.mongoose,icons.bootstrap,icons.jwt,icons.reactRouter],
        status:Status.IN_PROGRESS
    },
    {
        title:"Chat web app",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.nodejs,icons.reactjs,icons.express,icons.mongoose,icons.bootstrap,icons.socket,icons.jwt,icons.reactRouter],
        status:Status.IN_PROGRESS
    },
    {
        title:"Chatbot web app",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.next,icons.reactjs,icons.typescript,icons.tailwind,icons.shadcn,icons.aceternity,icons.jwt,icons.clerk],
        status:Status.IN_PROGRESS
    },
    {
        title:"Google search clone",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.css,icons.html,icons.javascript,icons.nodejs,icons.express],
        status:Status.DONE
    },
    {
        title:"Google translate clone",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.css,icons.html,icons.javascript,icons.nodejs,icons.express],
        status:Status.DONE
    },
    {
        title:"School management API",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.mysql,icons.spring,icons.java],
        status:Status.DONE
    },
    {
        title:"Text editor",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.reactRouter],
        status:Status.DONE
    },
    {
        title:"Code editor",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.reactRouter],
        status:Status.IN_PROGRESS
    },
    {
        title:"Postman clone",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[],
        status:Status.IN_PROGRESS
    },
    {
        title:"Canva clone",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.reactRouter,icons.bootstrap,icons.tldraw],
        status:Status.IN_PROGRESS
    },
    {
        title:"Image editor",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.html,icons.css,icons.javascript],
        status:Status.DONE
    },
    {
        title:"Simple fastify-prisma API",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.fastify,icons.prisma,icons.jwt],
        status:Status.DONE
    },
    {
        title:"E-commerce mobile app",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.navigation,icons.reactNative,icons.dotnet,icons.mongodb],
        status:Status.IN_PROGRESS
    },
    {
        title:"simple E-commerce frontend",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.reactjs],
        status:Status.DONE
    },{
        title:"simple custom Auth system",
        description:"Description of project 1",
        image:"/images/project1.png",
        icons:[icons.express,icons.nodejs,icons.jwt],
        status:Status.DONE
    },
];

export {projects}