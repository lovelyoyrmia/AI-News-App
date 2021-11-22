import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    titleNav: {
        fontSize: '4rem',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-between',
        width: '15rem',
        justifySelf: 'start',
        marginLeft: '0.7rem',
        padding: '1rem 0'
    },
    itemNav: {
        display: 'flex',
        fontSize: 20,
        alignItems: 'center',
        textDecoration: 'none',
        marginRight: '2rem',
        height: '2rem'
    },
    itemHTU: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '8rem',
        cursor: 'pointer',
        fontSize: 20,
        marginRight: '2rem',
    },
    dropdownStyle: {
        listStyle: 'none',
        background: 'linear-gradient(#FFF,#FFF2CC)',
        position: 'absolute',
        zIndex: '1',
        width: '18rem',
        top: '60px',
        borderRadius: '20px',
        boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.2)'
    },
    dropdownItem: {
        display: 'block',
        width: '100%',
        height: '100%',
        textDecoration: 'none',
        padding: '1rem',
        color: 'black',
        textAlign: 'start',
        fontSize: 20
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        padding: '5px 0',
        height: '3rem',
    }
})

export default styles