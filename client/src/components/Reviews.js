import React from 'react'
import { Button, Grid, Segment, Icon } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <RevStyle>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >

        <Carousel.Item>
          <Segment style={styles.segment}>
            <Grid
              stackable
              columns={2}
              relaxed='very'
              style={{ textAlign: 'center', }}
              divided
            >
              <Grid.Column>
                <div>
                  <Icon name='user circle outline' size='big' />
                  <p>
                    This course is difficult but rewarding if your willing to put in the effort and time.
                    Instructor and the staff is awesome but if you dont give it your all that all means nothing.
                    It was an awesome experience for me overall. I highly recommend this course!
                </p>
                  <h3>
                    Usong Cho
                </h3>
                  <p>
                    U of U Full-Time Student
                </p>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div>
                  <Icon name='user circle outline' size='big' />
                  <p>
                    It was incredibly challenging and satisfying. The curriculum was difficult but there was always
                    consistent and relevant support from the instructors, the TAs as well as the active mentors.
                    I would do it again.
                </p>
                  <h3>
                    Bryan Holbrook
                </h3>
                  <p>
                    Co-founder of Forma DS
                </p>
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Carousel.Item>


        <Carousel.Item>
          <Segment style={styles.segment}>
            <Grid
              stackable
              columns={2}
              relaxed='very'
              style={{ textAlign: 'center' }}
              divided
            >
              <Grid.Column>
                <div>
                  <Icon name='user circle outline' size='big' />
                  <p>
                    I graduated from DevPoint Labs in January '18, and just over a year later it's proven to be
                    one of the best decisions I have ever made in my career. The DPL fulltime full stack course
                    offers quality, relevant content and tons of hands on experience and mentorship over the course
                    of an intensive 11 weeks.
                </p>
                  <h3>
                    Dan
                </h3>
                  <p>
                    Full Stack Software Engineer
                </p>
                </div>
              </Grid.Column>

              <Grid.Column
                verticalAlign='middle'
              >
                <div>
                  <a
                    href='https://www.coursereport.com/schools/devpoint-labs#/reviews'
                    target='_blank'
                  >
                    <Button inverted color='blue'>
                      See more Reviews
                  </Button>
                  </a>
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Carousel.Item>
      </Carousel>
      </RevStyle>
    )
  }
}

const styles = {
  segment: {
    paddingTop: '5em',
    paddingBottom: '5em',
    paddingLeft: '10%',
    paddingRight: '10%',
    fontSize: 'x-small',
    background: 'gainsboro',
  },
}

const RevStyle = styled.div`
  @media (max-width: 1440px) {
    height: 19em    
  }

  @media (max-width: 770px) {
    height: 21em    
  }

  @media (max-width: 430px) {
    height: 36em
  }

  @media (max-width: 365px) {
    height: 39em
  }
`

export default Reviews