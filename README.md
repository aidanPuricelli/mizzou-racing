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


<br><br>
```html
<div class="small-sponsor-card">
    <img src="../../assets/sponsors/zoltek.png" alt="Sponsor 1 Logo">
</div>
```
Each smaller sponsor is represented by the above block of code.
+ To modify the logo image, edit the path inside of `src`.
<br><br>
If you would like to add a new sponsor, copy and paste the respective block of code.

