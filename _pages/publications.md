---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->

<style>
table, tr, th, td {
  border: none;
  border-collapse: collapse;
  font-size: 97%;
  vertical-align: top;
  /* width: auto; */
}

.conference {
  font-weight: bold;
  color: #FF7070;
}

.journal {
  font-weight: bold;
  color: #4AA4E8;
}

.abstract {
  font-weight: bold;
  color: #5fd148ff;
}

.venue {
  /* font-weight:bold; */
  font-style: italic;
}

.toggleButton {
  background: none;
  border: none;
  color: #f872a5;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font: inherit;
}

.toggleButton:hover {
  text-decoration: none;
}

.expandableText {
  display: none;  /* Hide by default */
}

.expandableText.show {
  display: block;  /* Show when 'show' class is added */
}

.bibtex {
  font-family: monospace;
  white-space: pre;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

</style>

<table>
  <tr>
    <td class="abstract">
      [A1]
    </td>
    <td>
      Richard West, Zhiyuan Ruan, <u><b>Shriram Raja</b></u>, and Rafiuddin Syed, <span class="abstract">"Tutorial: Mixed-Criticality Computing with the Quest RTOS and Quest-V Partitioning Hypervisor"</span>, <span class="venue">25th ACM SIGBED International Conference on Embedded Software (EMSOFT)</span>, 2025 
      <span>
        <!-- [<button class="toggleButton">Brief</button>]
        [<button class="toggleButton">BibTex</button>] -->
        [<a target="_blank" rel="noopener noreferrer" href="/files/Tutorial_EMSOFT_2025.pdf">pdf</a>]
        [<a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1145/3742874.3758338">DOI</a>]
      </span>
      <!-- <div class="expandableText"> -->
        <!-- <b>Brief:</b> -->
        <ul>
        <li>This abstract gives an overview of the Quest-V Software Development Kit and serves as companion document to the tutorial we organized as a part of EMSOFT 2025. </li>
        </ul>
      <!-- </div> -->
      <!-- <div class="expandableText bibtex"> -->
      <!-- <b>BibTex:</b> 
@inproceedings{questv-sdk-tutorial,
  author = {West, Richard and Ruan, Zhiyuan and Raja, Shriram and Syed, Rafiuddin},
  title = {&#123;Tutorial: Mixed-Criticality Computing with the Quest RTOS and Quest-V Partitioning Hypervisor&#125;},
  year = {2025},
  isbn = {9798400719936},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3742874.3758338},
  doi = {10.1145/3742874.3758338},
  location = {Taipei International Convention Center (TICC), Taipei, Taiwan},
  series = {EMSOFT '25} -->
<!-- }</div> -->
    </td>
  </tr>
  <tr>
    <td class="journal">
      [J1]
    </td>
    <td>
      Xuanliang Deng*, <u><b>Shriram Raja</b></u>*, Yecheng Zhao, and Haibo Zeng, <span class="journal">"Priority Assignment for Global Fixed Priority Scheduling on Multiprocessors"</span>, <span class="venue">IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)</span>, 2024 
      <span>
        <!-- [<button class="toggleButton">Brief</button>]
        [<button class="toggleButton">BibTex</button>] -->
        [<a target="_blank" rel="noopener noreferrer" href="/files/HP_MITER_TCAD_2024.pdf">pdf</a>]
        [<a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1109/TCAD.2024.3376588">DOI</a>]
        [<a target="_blank" rel="noopener noreferrer" href="https://github.com/Shriram-Raja/HP-MITER">Code</a>]
      </span>
      <!-- <div class="expandableText"> -->
      <!-- <b>Brief:</b>  -->
      <ul>
      <li> Proposes a Mixed Priority Assignment algorithm for Global Fixed Priority (G-FP) scheduling that combines the advantages of heuristics and response time estimation (in place of actual response time) to outperform existing methods by 25% on average. </li>
      <li> * - contributed equally </li>
      </ul>
      <!-- </div> -->
      <!-- <div class="expandableText bibtex"> -->
      <!-- <b>BibTex:</b> 
@article{hp-miter,
  author = {Deng, Xuanliang and Raja, Shriram and Zhao, Yecheng and Zeng, Haibo},
  journal = {IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems}, 
  title = {&#123;Priority Assignment for Global Fixed Priority Scheduling on Multiprocessors&#125;}, 
  year = {2024},
  volume = {43},
  number = {9},
  pages = {2538-2550},
  doi = {10.1109/TCAD.2024.3376588} -->
<!-- }</div> -->
    </td>
  </tr>
</table>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggleButton');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent td, then get all expandable texts in this row
      const parentTd = this.closest('td');
      const expandableTexts = parentTd.querySelectorAll('.expandableText');
      
      // Determine which expandable text to toggle based on button order
      const buttonIndex = Array.from(this.parentElement.children).indexOf(this);
      const textElement = expandableTexts[buttonIndex];
      
      if (textElement.classList.contains('show')) {
        // When hiding
        textElement.style.height = '0';
        textElement.style.padding = '0';
        textElement.classList.remove('show');
      } else {
        // When showing
        textElement.style.height = (textElement.scrollHeight + 15) + 'px';
        textElement.style.padding = '15px 0px';
        textElement.classList.add('show');
      }
    });
  });
});
</script>
