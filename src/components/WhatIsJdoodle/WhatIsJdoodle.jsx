import React from 'react';
import Item from '../Item/Item';
import './whatIsJdoodle.css';

const WhatIsJdoodle = () => (
  <div className="what-IS-jdoodle section__margin" id="WhatIsJdoodle">
    <div className="what-IS-jdoodle-feature">
      <Item title="What is JDoodle" text=" JDoodle is a free Online Compiler, Editor, IDE for Java, C, C++, PHP, Perl, Python, Ruby. Code Online - Share Save Java/C/C++/Perl/Python/Ruby online." />
    </div>
    <div className="what-IS-jdoodle-heading">
      <h1 className="gradient__text">The best place to build, test, and discover front-end code.</h1>
    </div>
    <div className="what-IS-jdoodle-container">
      <Item title="Code Editor" text="Empower your coding journey with zero-setup IDEs for  more than 76 languages." />
      <Item title="Compiler API" text="The JDoodle API provides a simple and secure way to execute code and run programs from within a third-party application." />
      <Item title="IDE Plugin" text="JDoodle's compiler and other features make it a great choice for anyone looking for a user-friendly, web-based IDE." />
      <Item title="Courses" text="Transform your classroom with our innovative teaching and assessment solutions " />
    </div>
  </div>
);

export default WhatIsJdoodle;
