import React,{ Component} from 'react';

//1rst method to use the higher order component
// const withClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// );

//2nd method to use the HOC with a function who return a component / syntaxe 1
// const withClass = (WrappedComponent,className) => {
//     return props => (
//        <div className={className}>
//            <WrappedComponent {...props}/>
//        </div> 
//     )
// }

//2nd method to use the HOC with a function who return a class component / syntaxe 2
const withClass = (WrappedComponent,className) => {
    const WithClass = class extends Component{
        render() {
            return(
                <div className={className}>
                <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
            </div>  
            )
        }
    }
    return React.forwardRef((props,ref) => {
        return <WithClass {...props} forwardedRef={ref} />;
    });
}
export default withClass;