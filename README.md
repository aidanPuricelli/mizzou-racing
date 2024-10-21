# Updating this website

## Sponsors

Navigate to `src/app/ev-sponsors/ev-sponsors.component.html` (replace `ev-sponsors` with `ic-sponsors` to update ic sponsor page). 

```html
<div class="sponsor-card">
    <a href="#"><img src="../../assets/sponsors/Altium.png" alt="Sponsor 1 Logo"></a>
    <h3>Sponsor 4</h3>
    <p>Funding</p>
</div>
```
Each sponsor is represented by the above block of code. 
+ To modify the logo image, edit the path inside of `src`.
+ To modify the sponsors url, edit the path inside of `href`.
+ To modify the name of the sponsor, edit the text inside of `h3`.
+ To modify the contribution of the sponsor, edit the text inside of `p`.

```html
<div class="small-sponsor-card">
    <img src="../../assets/sponsors/zoltek.png" alt="Sponsor 1 Logo">
</div>
```
Each smaller sponsor is represented by the above block of code.
+ To modify the logo image, edit the path inside of `src`.

If you would like to add a new sponsor, copy and paste the respective block of code.

## Sub Teams

Navigate to `src/app/sub-team-name/sub-team-name.component.html` (e.g. `src/app/electronics/electronics.component.html` for the electronics sub team). 

```html
<div class="aero-card-container">
    <div class="aero-card">
      <h3>What We Do...</h3>
      <p>
        Our electronics team is responsible for the design and implementation of all the electronics and wiring in the car.
        We assemble our entire wiring harness from scratch to connect our MoTec M150, custom power distribution unit, datalogger, 
        electronic throttle, digital dash, and other electronic components. The team makes various custom PCBs and firmware 
        packages to help us gain a competitive advantage through electronics.
      </p>
    </div>
</div>
```
The 'What We Do...' card is represented by the above block of code.
+ To modify the What We Do text, edit the text inside of `p`.

```html
<div class="aero-image-grid">
    <img src="../../assets/electronics/electronics1.jpg" alt="Aerodynamics work 1">
    <img src="../../assets/electronics/electronics2.jpg" alt="Aerodynamics work 2">
    <img src="../../assets/electronics/electronics3.jpg" alt="Aerodynamics work 3">
    <img src="../../assets/electronics/electronics4.JPG" alt="Aerodynamics work 4">
</div>
```
The grid of images in the middle of the page is represented by the above block of code.
+ To modify the images displayed in the grid, edit the paths inside of the `src` tags. 

```html
<div class="subteam-lead-card-container">
    <div class="subteam-lead-card">
      <h3>Sub Team Lead: Jack Fels</h3>
      <div class="subteam-lead-content">
        <div class="subteam-lead-image">
          <img src="../../assets/electronics/Jack.JPG" alt="Team Leader">
        </div>
        <div class="subteam-lead-text">
          <p>
            Jack is a junior electrical engineering student and Cheif Electrical Engineer for Mizzou Racing. 
            He joined the team in the fall of 2022 and is a key member in the IC and EV builds. Jacks goals for 
            the season are:
        </p>
        </div>
      </div>
    </div>
</div>
```
The card containing information about the team lead is represented by the above block of code.
+ To modify the team leads name, edit the text inside of `h3`.
+ To modify the team lead image, edit the path inside of `src`.
+ To modify the team lead information, edit the text inside of `p`.
