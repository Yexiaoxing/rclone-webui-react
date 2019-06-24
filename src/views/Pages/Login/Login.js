import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import {connect} from "react-redux";
import {signOut} from "../../../actions/userActions";

class Login extends Component {

    constructor(props) {
        super(props);
        let ipAddress = "http://localhost:5572/";
        if(localStorage.getItem('ipAddress'))
            ipAddress = localStorage.getItem('ipAddress');
        this.state = {
            username: "",
            password: "",
            ipAddress: ipAddress
        };
    }

    changeUserName = e => {
        this.setState({username: e.target.value});
    };
    changePassword = e => {
        this.setState({password: e.target.value})
    };
    changeIPAddress = e => {

        this.setState({ipAddress: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        localStorage.setItem('ipAddress', this.state.ipAddress);

        this.props.history.push('/dashboard')
    };

    componentDidMount() {
        localStorage.clear();
        this.props.signOut();
    }


    render() {
        const {username, password, ipAddress} = this.state;

        return (
            <div className="app flex-row align-items-center" data-test="loginComponent">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form onSubmit={this.onSubmit}>
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="IP Address" autoComplete="ipAddress"
                                                       onChange={this.changeIPAddress} value={ipAddress}/>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="Username" autoComplete="username"
                                                       onChange={this.changeUserName} value={username}/>
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" placeholder="Password"
                                                       autoComplete="current-password" onChange={this.changePassword}
                                                       value={password}/>
                                            </InputGroup>
                                            <Row>
                                                <Col xs="6">
                                                    <Button color="primary" className="px-4">Login</Button>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <Button color="link" className="px-0">Forgot password?</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>

                                            </p>
                                            <Link to="/register">
                                                <Button color="primary" className="mt-3" active tabIndex={-1}>Register
                                                    Now!</Button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default connect(null, {signOut})(Login);