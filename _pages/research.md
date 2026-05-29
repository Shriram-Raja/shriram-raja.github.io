---
layout: archive
title: ""
permalink: /research/
author_profile: true
---

## Security
___

<b style="color: #f26c6c;">Compartmentalization of Monolithic Kernels using
Hardware Virtualization</b> (Active)<br>
<b>Collaborator:</b> <a target="_blank" rel="noopener noreferrer" href="https://cs-people.bu.edu/zruan/">Zhiyuan (Ryan) Ruan</a><br>
<b>Advisor:</b> <a target="_blank" rel="noopener noreferrer" href="https://www.cs.bu.edu/~richwest/index2.html">Richard West</a>

Existing monolithic kernels, e.g. Linux, do not inherently enforce any
separation between different components. This leads to vulnerabilities in one
subsystem affecting the entire kernel. Researchers have considered various
compartmentalization techniques to mitigate this issue. We tackle this problem
by defining compartment boundaries using hardware virtualization. Using
features such as virtualization exceptions, we interpose the execution of a
monolithic kernel and use a generic sentry function to validate each
cross-compartment access.

<br>

## Scheduling & Synchronization
___

<b style="color: #f26c6c;">Synchronization in a Real-Time Kernel</b><br>
<b>Advisor:</b> Richard West

Enforcing mutual exclusion on shared resources is a classic problem in
operating systems research. In this work, we explore synchronization in the
context of a big kernel lock for a Real-Time Operating System. Priority-ordered
locks may result in the starvation as they always allow a higher priority
waiter to acquire the lock before one of lower priority. On the other hand,
First-In-First-Out (FIFO) locks provide a bounded wait time, but completely
ignore the priority of waiters. We propose Batched Priority Lock (BPL) which
takes a middle ground: it enforces the same maximum bound on the waiting time
as FIFO locks using the concept of batching, but consider the priority of
waiters within the same batch to improve the average waiting time of higher
priority tasks.

<br>

<b style="color: #f26c6c;">Priority Assignment for Global Fixed Priority Scheduling on Multiprocessors</b><br>
<b>Collaborator:</b> Xuanliang Deng<br>
<b>Advisor:</b> <a target="_blank" rel="noopener noreferrer" href="https://ece.vt.edu/people/profile/zeng.html">Haibo Zeng</a>

Global scheduling is an attractive option for multiprocessors as it allows
tasks to be placed on any available core, freely allowing load balancing.
Assigning fixed priorities to tasks avoids the updation of the relative
position of a task in the global runqueue when its priority changes, minimizing
contention on a shared resource. Prior work by Yecheng Zhao and Haibo Zeng has
proposed an optimization-based approach that uses response time estimation to
assign priorities to tasks under the Global Fixed Priority paradigm. In this
work, we develop a novel algorithm that extends the aforementioned method by
including a simple heuristic, extending its applicability to the latest, and
hence the most accurate schedulability analysis.

{% comment %} 
<b style="color: #f26c6c;">Scheduling on Heterogeneous Architectures </b> (Active)<br>
<b>Advisor:</b> <a target="_blank" rel="noopener noreferrer" href="https://www.cs.bu.edu/~richwest/index2.html">Richard West</a>


{% endcomment %}