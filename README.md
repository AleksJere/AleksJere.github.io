# Authors: Purab Balani, Aleksandar Jeremic, Syler Sylvester
## Lending A Hand
### ECE 196 FA 2024

![Alt text](https://github.com/AleksJere/AleksJere.github.io/blob/main/Images/UCSDLogo-JSOE-ElectricalandComputerEngineering-BlueGold-Web.jpg)

### Problem followed by our solution
Over 1.3 billion people across the globe are afflicted with disabilities that make leading a normal life difficult compared to able-bodied people. More specifically, another arm or hand could make maneuvering around or reaching essentials much easier. We are considering mainly people who are affected with trauma injuries or medical conditions which leave them in wheelchairs. Our solution involves creating a mountable highly accurate robotic arm which can be placed on a counter to help these people reach higher areas in their house.  

### Team introductions

#### Purab Balani


#### Aleksandar Jeremic

<img src="https://github.com/AleksJere/AleksJere.github.io/blob/main/Images/Sasha_pfp.jpg" width="400" alt="Alt text">
My name is Aleksandar Jeremic. I am a 3rd year transfer ECE student at UCSD and my depth is Machine Learning And Controls. I enjoy playing sports, video games and spending time with my friends, I am often in Envision either distracting my friends from their work or getting distracted myself. I also TA for ECE 5 and hope this project is something I can be proud to show as a reachable goal for an undergraduate student interested in control theory. I also am interested in Devices and Material Science and am currently researching defects in magnetic tunnel junctions (MTJs)

#### Syler Sylvester








### Milestones and Timeline -- we should meet and agree on how to improve this im just setting a small outline with a few things


#### MCAD - Onshape

In our Timeline we have been working to construct and develop a CAD model for our arm which we can split into three parts. Our proposed design for our arm was decided upon on October 23 2024 with 2 supplemental pictures of sketches below.


Our original plan was to use servos in certain places, we quickly scrapped that idea as Adin and Ming talked to us about using steppers and we switched from a servo based on arm design to a stepper based design which has all the motors on the bottom acting with pulleys similar to a crane. Below we show the crane-like system

<img src="https://github.com/AleksJere/AleksJere.github.io/blob/main/Images/original_plan.jpg" width="400" alt="Alt text">

We continued planning out this system untill we had a conversation with Ming where he spoke about how alot of things in industry use pulleys and belts with ball bearings to transfer torque from the base to the other parts of the arm. so we switched onto that approach, here we can see the front back view with sets of rods that are connected through holes in the arms, these are connected either to exert torque or to transfer torque further along the system.

<img src="https://github.com/AleksJere/AleksJere.github.io/blob/main/Images/final_side_view.jpg" width="400" alt="Alt text">

Here we can see a multilayer system with belts.

We have placed a time to finish for the design by the middle of week 6, currently Purab is working on constructing the base which is to rotate and hold all the stepper motors, Aleksandar is working on the upper arm and forearm, and Syler is working on the claw. By early week 6 we expect to have simulation of joints and then manufacture our pulley system.

### Coding and Control

As of week 6 we should receive a premade controller for the stepper to begin constructing our code for control, we expect ourselves to finish implementing initial simple joystick commands to motor movements before we work on inverse kinematics. We are searching for and attempting to model the base using a state space system and we are also looking at papers on inverse kinematics to make sure we are moving forward.

We expect to be finishing our inverse kinematics modelling by the end of week 6 and hopefully able to implement some simulation results by early week 7.

A very intense scheduling can see us getting to testing our entire setup by the end of week 7 or early week 8







