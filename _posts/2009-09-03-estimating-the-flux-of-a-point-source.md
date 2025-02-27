---
title: Estimating the flux of a point source
tags:
- Astronomy
disqus_shortname: enkaptic
---
You have a map and you know what a point source looks like. How do you filter the map so that the value of each pixel is now the most likely flux of a point source centred on that pixel? (An isolated point source, to be more precise.)

Easy. 

First, find $$P_i$$, which is the **point response function** (PRF), telling you what a point source of flux 1 will look like in the map. This may be normalized so that the peak is 1 (if your map is in Jy/beam or similar), or so that $$\sum P_i = 1$$ (if your map is in Jy/pixel or similar). If your map is in MJy/sr ... well, figure it out and add a comment below. Basically, if you normalize your PRF correctly, you won't need to worry about the map units in what follows. Phew.

Now the measured value of each pixel around the point source, $$d_i$$, will be

$$d_i = f P_i + n_i,$$

where $$f$$ is the flux of the source and $$n_i$$ is the noise, drawn from a normal distribution with mean zero and standard deviation $$\sigma_i$$.

Now the badness of the fit is measured by the $$\chi^2$$, which is given by

$$\chi^2 = \sum_i \left( \frac{d_i - fP_i}{\sigma_i} \right)^2.$$

At the maximum likelihood value of the flux, $$f$$, $$\chi^2$$ will be at a minimum, so

$$\frac{\mathrm{d}\chi^2}{\mathrm{d}f} = 0.$$

Hence

$$\sum_i (-2d_i + 2 f P_i^2) / \sigma_i^2 = 0.$$

Solving this for $$f$$, we find the maximum likelihood solution

$$f = \frac{\sum_i d_i P_i / \sigma_i^2}{\sum_i P_i^2 / \sigma_i^2}.$$

Now just do this for each pixel in the map (corresponding to a point source centred on each pixel) and you're done.

**Worked example**. $$P_i$$ is 0.5, 1.0 and 0.5, for three adjacent pixels (you'll have realised that the map is in Jy/beam or similar), and $$d_i$$ is 1, 2 and 1 Jy/beam, for three adjacent pixels, with the same (tiny!) value of $$\sigma_i$$ for each pixel (in this case, we can ignore the value of $$\sigma_i$$ in what follows). So the flux at the central pixel is estimated to be

$$f = (0.5 \times 1 + 1.0 \times 2 + 0.5 \times 1) / (0.5^2 + 1.0^2 + 0.5^2) = 2 \,\mathrm{Jy},$$

which is no surprise, since the maximum value of the map in Jy/beam is 2 at that position.

This is an example of a [matched filter](http://en.wikipedia.org/wiki/Matched_filter) (I haven't read the page, but hopefully including the link will make me look clever). And, given that point sources are under no particular obligation to align themselves with the centres of the pixels of your map, $$P_i$$ can easily be re-estimated for a source with a certain offset from the pixel centre.
