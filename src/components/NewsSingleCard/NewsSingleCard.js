import React from 'react'
import { 
  Card, 
  CardActions, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography
} from '@material-ui/core'
import useStyles from './styles'
import classnames from 'classnames'

function NewsSingleCard({ 
  article: { 
    description, 
    publishedAt, 
    source, 
    title, 
    url, 
    urlToImage
  },activeArticle, index}) {

  const classes = useStyles()
  const imageUrl = 'https://th.bing.com/th/id/R.7b9f08ef57505370ef7cc9e192d2b32e?rik=87Hq4a932oRo1g&riu=http%3a%2f%2fil5.picdn.net%2fshutterstock%2fvideos%2f7613365%2fthumb%2f1.jpg%3fi10c%3dimg.resize(height%3a160)&ehk=kTHhkkPkGckZx97gaob8HyoWuU5IswSWXemaCPxin2o%3d&risl=&pid=ImgRaw&r=0'
  // const [elRefs, setElrefs] = useState([])
  // const scrollToRefs = (ref) => window.scroll(0, ref.current.offsetHeight - 50)

  // useEffect(() => {
  //   setElrefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
  // },[])

  // useEffect(() => {
  //   if(index === activeArticle && elRefs[activeArticle]){
  //     scrollToRefs(elRefs[activeArticle])
  //   }
  // },[index, activeArticle, elRefs])

  return (
    <Card className={classnames(classes.card, activeArticle === index ? classes.activeCard : null)}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} 
          image={
            urlToImage || imageUrl } />
        <div className={classes.details}>
          <Typography 
            variant='body2' 
            color='textSecondary' 
            component='h2'
          >
            {(new Date(publishedAt)).toDateString()}
          </Typography>
          <Typography 
            variant='body2' 
            color='textSecondary' 
            component='h2'
          >
            {source.name}
          </Typography>
        </div>
        <Typography 
          variant='h5' 
          gutterBottom
          className={classes.title}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography 
            variant='body2' 
            color='textSecondary' 
            component='p'
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' href={url} target='_blank'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default NewsSingleCard
