import React from 'react';
import styled from 'styled-components';

const ASCII = styled.pre`
  color: ${props => props.theme.green};
  user-select: none;
`;

const ReactASCII = () => (
  <code><ASCII>{
`                                                                                                                                                                                                                                                          
                                                                      \`\`.---------\`\`\`                                                                               \`\`.---/////---.\`                                                                      
                                                                 \`.:/ooossssssssssoooo+/:-\`\`                                                                 \`\`-:/+ooosssssssssssssoo/-.                                                                  
                                                               ./ossssssssssssssssssssssssoo/:.\`                                                         \`.:/oosssssssssssssssssssssssss+:\`                                                               
                                                             .+sssssssssssssssssssssssssssssssso+:.\`                                                 \`.:+osssssssssssssssssssssssssssssssso:\`                                                             
                                                           \`+sssssssssssssssssssssssssssssssssssssso+:.                                           .-/osssssssssssssssssssssssssssssssssssssso-                                                            
                                                          -osssssssssssssssoooosssssssssssssssssssssssso/.\`                                    \`:+sssssssssssssssssssssssooooooossssssssssssss:\`                                                          
                                                         :sssssssssssso/-..\`  \`...--/+ossssssssssssssssssso/.\`                              \`:+ssssssssssssssssssso+/-..\`      \`.:/ssssssssssss+\`                                                         
                                                        -ssssssssssso:\`               \`..:+ossssssssssssssssso/.                         \`-/ssssssssssssssssso+:-.\`                ./sssssssssss+                                                         
                                                       .sssssssssss/\`                      \`.-+ossssssssssssssss+-\`                   \`./ossssssssssssssss+:.\`                       -ossssssssss:                                                        
                                                       +ssssssssss:                            \`-/ossssssssssssssss/.\`              \`-+ssssssssssssssso/:.                            -sssssssssss.                                                       
                                                      -ssssssssss+                                \`./ossssssssssssssso-\`          \`/+sssssssssssssso+:\`                                :ssssssssss/                                                       
                                                      ossssssssso\`                                   \`./osssssssssssssso/\`      \`/sssssssssssssss+:\`                                    +ssssssssss.                                                      
                                                     .ssssssssss:                                       \`.+ossssssssssssss/\`  -+sssssssssssssso:.                                       .ssssssssss/                                                      
                                                     /ssssssssss\`                                          \`:ossssssssssssss/+ssssssssssssss+.\`                                          ossssssssso                                                      
                                                     +ssssssssss                                              .+ssssssssssssssssssssssssso:.                                             :ssssssssss.                                                     
                                                     osssssssss:                                                \`:osssssssssssssssssssso:\`                                               .ssssssssss.                                                     
                                                    .ssssssssss:                                                  \`/sssssssssssssssss+-\`                                                  ssssssssss:                                                     
                                                    .ssssssssss:                                                    -sssssssssssssss+\`                                                    ssssssssss+                                                     
                                                    .ssssssssss:                                                  \`:osssssssssssssssso:\`                                                  ssssssssss+                                                     
                                                    .ssssssssss:                                                 :osssssssssssssssssssso.                                                 ssssssssss+                                                     
                                                    .ssssssssss:                                               .+ssssssssssssssssssssssss+.                                               ssssssssss+                                                     
                                                    .ssssssssss:                                             \`+sssssssssssss:/sssssssssssso:                                              ssssssssss/                                                     
                                                     +sssssssss:                                            :ossssssssssss/\`  \`/sssssssssssso.                                            ssssssssss.                                                     
                                                     +ssssssssss                                          ./ssssssssssss+\`      -ossssssssssss+                                          -ssssssssss.                                                     
                                                     /ssssssssss                                         :sssssssssssso-          :sssssssssssso-                                        :ssssssssss.                                                     
                                                     .ssssssssss:                                      .ossssssssssss/             .+ssssssssssss/                                       +ssssssssso                                                      
                                                     \`osssssssss/                                     :sssssssssssso.                :ossssssssssso.                                     ssssssssss+                                                      
                                                      ossssssssss                                   .ossssssssssss:\`                  \`+ssssssssssss/                                   -ssssssssss-                                                      
                                                      -ssssssssss-                                 :ssssssssssss+.                      -ossssssssssso.                                 +ssssssssso\`                                                      
                                                      \`osssssssss+                          \`\`\`\`\`./sssssssssssssoooooooooooooooooooooooooosssssssssssss:.\`\`\`\`                           ssssssssss+                                                       
                                                       /ssssssssss.            \`\`.--:///+oooooooossssssssssssssssssssssssssssssssssssssssssssssssssssssssoooooooo///:---\`\`\`            :ssssssssss-                                                       
                                                       .ssssssssss/ \`\`.--://ooooosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssooooo+//--.\`\`  ossssssssso                                                        
                                                        +ssssssssssooosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssoooossssssssss/                                                        
                                                     \`.-/ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss:.\`                                                      
                                               \`.-:/oosssssssssssssssssssssssssssssssssssssssssssssssssoooo+///////////------------///////////+ooosssssssssssssssssssssssssssssssssssssssssssssssssoo/:-.\`                                                
                                          ..-/oossssssssssssssssssssssssssssssssssssoooo/+ssssssssssss+\`\`\`\`                                    \`\`\`:ossssssssssss//+oossssssssssssssssssssssssssssssssssssoo/:..                                           
                                     \`.-/osssssssssssssssssssssssssssssssoo+///--...\`\`\`\`.osssssssssss:                                             .osssssssssss/\`\`\`\`....--///ooosssssssssssssssssssssssssssssso/-.\`                                      
                                 \`.:+ossssssssssssssssssssssssssssssso-..\`\`            -ssssssssssss-                                               \`/sssssssssss+\`           \`\`\`.-/ssssssssssssssssssssssssssssssso+:.\`                                  
                             \`.:+osssssssssssssssssssssssoo+ssssssssss:               :ssssssssssso.                                                  :ssssssssssso.               +ssssssssssoossssssssssssssssssssssso+:.\`                              
                          \`-/osssssssssssssssssssssoo/:-.\` \`ossssssssss.             /sssssssssss/\`                                                    -osssssssssso-             :ssssssssss+ \`..-/+ossssssssssssssssssssso/-\`                           
                       \`-/ossssssssssssssssssso+/-.\`        :ssssssssss+           \`+sssssssssss:                                                       .osssssssssss:           .ossssssssss\`       \`.-:/oosssssssssssssssssso/-\`                        
                     .:osssssssssssssssssoo/-.\`              +ssssssssss/         \`osssssssssss-                                                         \`+sssssssssss:          +ssssssssss:             \`\`-/oossssssssssssssssso+-\`                     
                  \`-+ssssssssssssssssso/-\`                   \`ossssssssss.       .osssssssssso.                       \`\`\`\`.----\`\`\`\`\`                       /sssssssssss/        /ssssssssss+                   \`.:+osssssssssssssssso:\`                   
                \`:ossssssssssssssso/-.                        .sssssssssso\`     .osssssssssso.                    \`.:/oossssssssssoo/-.\`                    /sssssssssss+\`     .sssssssssso\`                       \`./ossssssssssssssso:.                 
              \`:osssssssssssssso/.                             /ssssssssss+    -sssssssssss+\`                  \`-+osssssssssssssssssssso/.\`                  -ossssssssss+\`   \`ossssssssss-                            .:+ossssssssssssss+.               
             :ossssssssssssso/.                                \`+ssssssssss/  -sssssssssss/\`                 \`/osssssssssssssssssssssssssso-\`                 .ossssssssss+. \`+ssssssssss/                                \`:+ssssssssssssso:\`             
           \`+sssssssssssss+-                                    .ossssssssss--sssssssssss/                  :ssssssssssssssssssssssssssssssso-                 .osssssssssso./ssssssssss+                                    ./osssssssssssso.            
          .ossssssssssss/\`                                       -ssssssssssssssssssssss/                 \`+ssssssssssssssssssssssssssssssssss:                 \`+ssssssssssssssssssssso\`                                      \`-ossssssssssss:           
         .osssssssssss/.                                          :ssssssssssssssssssss:                 .ossssssssssssssssssssssssssssssssssss+                 \`ossssssssssssssssssss.                                          -osssssssssss/          
        \`osssssssssso-                                             +ssssssssssssssssss:                 \`ossssssssssssssssssssssssssssssssssssss/                 \`ossssssssssssssssss-                                            \`/sssssssssss:         
        +ssssssssss+\`                                              \`ossssssssssssssss:                  /ssssssssssssssssssssssssssssssssssssssss.                 \`+ssssssssssssssss/                                               :sssssssssss.        
       .ssssssssss+                                                 \`sssssssssssssss:                   sssssssssssssssssssssssssssssssssssssssss/                   +ssssssssssssss/                                                 -ssssssssss/        
       /ssssssssss-                                                  .ossssssssssss:                   :ssssssssssssssssssssssssssssssssssssssssss                    +ssssssssssss+                                                   /ssssssssso\`       
       /ssssssssss\`                                                   :sssssssssss+                    :ssssssssssssssssssssssssssssssssssssssssss                     ssssssssssss.                                                   /ssssssssss\`       
       :ssssssssss-                                                  \`sssssssssssss:                   -ssssssssssssssssssssssssssssssssssssssssss                    +sssssssssssso\`                                                  +ssssssssso\`       
       \`sssssssssso.                                                \`ossssssssssssss:                   sssssssssssssssssssssssssssssssssssssssss:                   +sssssssssssssso\`                                                :ssssssssss+        
        /sssssssssso.                                              \`ossssssssssssssss:                  /ssssssssssssssssssssssssssssssssssssssss\`                 \`+ssssssssssssssss/                                               :sssssssssso\`        
        \`osssssssssss-                                             /ssssssssssssssssss:                  ossssssssssssssssssssssssssssssssssssss-                 \`ossssssssssssssssss/                                            \`+sssssssssss:         
         \`osssssssssss+.                                          -ssssssssssssssssssss:                 \`ossssssssssssssssssssssssssssssssssss:                 \`ossssssssssssssssssss-                                         ./ssssssssssss:          
          \`+ssssssssssss/\`                                       -ssssssssssssssssssssss/                 \`/ssssssssssssssssssssssssssssssssss-                 \`ossssssssssosssssssssss.                                      \`/sssssssssssss:           
           \`:sssssssssssss+-                                    \`ossssssssss-:sssssssssss/                  -ossssssssssssssssssssssssssssss/\`                 .osssssssssso.-sssssssssso.                                   ./sssssssssssss+.            
             .+sssssssssssss+:.                                 +ssssssssss/  :sssssssssss/\`                 \`-ossssssssssssssssssssssssss/.                  .osssssssssso.  /ssssssssss+                                .:+ssssssssssssso:\`             
              \`:ossssssssssssss+:.                             /ssssssssss+\`   -sssssssssss+\`                  \`./+ssssssssssssssssssso+-\`                   -ossssssssss+\`    +ssssssssss/                            .:+sssssssssssssso:\`               
                \`:osssssssssssssss+:.\`                        .sssssssssso.     -ssssssssssso.                    \`\`-:/ooossssssoo+/-.\`                     -sssssssssss+\`     \`ossssssssss-                       \`.:ossssssssssssssso:\`                 
                  \`.+sssssssssssssssso/-\`                    \`ossssssssss.       .osssssssssso.                        \`\`\`\`\`\`\`\`\`\`\`                         :sssssssssss/\`       .sssssssssss\`                  \`.:+ossssssssssssssss+:\`                   
                     -:ossssssssssssssssoo/-.\`               /ssssssssss/         .osssssssssso-                                                         \`/sssssssssss/          :ssssssssss+              \`-:+ossssssssssssssssso+-                      
                       \`-/osssssssssssssssssso+/-\`\`         .ssssssssss+\`          \`osssssssssss:                                                       \`+sssssssssss:            +ssssssssss:        \`.:/+osssssssssssssssssso/-\`                        
                          \`-/osssssssssssssssssssoo/:-.\`   \`ossssssssss.            \`/sssssssssss+\`                                                    .osssssssssso:             .ossssssssso\` \`.-:/oosssssssssssssssssssso+-\`                           
                             \`-/+osssssssssssssssssssssoo///ssssssssss:               :sssssssssss+.                                                  -ssssssssssso.               -ssssssssss+oosssssssssssssssssssssso+/.\`                              
                                 \`:+osssssssssssssssssssssssssssssssso\`\`               :ssssssssssso-                                                /ssssssssssso.             \`\`..osssssssssssssssssssssssssssssso+/-\`                                  
                                    \`.-/oossssssssssssssssssssssssssssoo+///--...\`\`\`    .osssssssssss:                                             \`+sssssssssss/\`  \`\`\`...--///+oossssssssssssssssssssssssssssso+:-\`                                      
                                         \`.:/oossssssssssssssssssssssssssssssssssooo+///:/ssssssssssss+\`                                        \`\`.ossssssssssss+//+ooossssssssssssssssssssssssssssssssssso+/-.\`                                          
                                              ..-/oossssssssssssssssssssssssssssssssssssssssssssssssssso+//////////------------------://////////ooosssssssssssssssssssssssssssssssssssssssssssssssssoo/:-.\`                                               
                                                   \`.--/osssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssso-.\`                                                     
                                                        +ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssoosssssssssso                                                        
                                                       .ssssssssss/.--://ooooossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssooooo//:--.\` :ssssssssss-                                                       
                                                       /ssssssssss\`         \`\`.--:///+oooooooossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssoooooooo+///---.\`\`           \`osssssssss+                                                       
                                                      \`osssssssss+                       \`\`\`\`\`.---+sssssssssssssoooooooooooooooooooooooooosssssssssssss/-.\`\`\`\`\`                         :ssssssssss.                                                      
                                                      -ssssssssss-                                 /ssssssssssss+\`                      \`+ssssssssssso-                                 \`ssssssssss:                                                      
                                                      ossssssssso                                   .ossssssssssso:\`                   :ossssssssssso.                                   ossssssssso                                                      
                                                     .ssssssssss:                                     /ssssssssssss+.                ./ssssssssssss:                                     :ssssssssss.                                                     
                                                     .ssssssssss-                                      -ossssssssssss:              :ossssssssssso.                                      .ssssssssss.                                                     
                                                     /ssssssssss                                         /sssssssssssso-          .+ssssssssssss/                                         ssssssssss:                                                     
                                                     +ssssssssso                                          .+ssssssssssss/\`       /sssssssssssso.                                          osssssssss+                                                     
                                                    \`osssssssss:                                            :ossssssssssss/\`   -ossssssssssss:                                            :sssssssss+                                                     
                                                    .ssssssssss:                                             .+sssssssssssso-\`ossssssssssss+.                                             :sssssssss+                                                     
                                                    .ssssssssss:                                               .osssssssssssssssssssssssso:                                               :ssssssssso\`                                                    
                                                    .ssssssssss.                                                \`:osssssssssssssssssssss/                                                 :ssssssssss.                                                    
                                                    .ssssssssss                                                   \`/ssssssssssssssssss+.                                                  :ssssssssso\`                                                    
                                                    .ssssssssss:                                                    .+sssssssssssssso.                                                    :sssssssss+                                                     
                                                    .ssssssssss:                                                   \`/ssssssssssssssss+-                                                   :sssssssss+                                                     
                                                    .ssssssssss:                                                 .:osssssssssssssssssss+-\`                                                ssssssssss+                                                     
                                                     +ssssssssso                                              \`.+sssssssssssssssssssssssso:\`                                              ssssssssss-                                                     
                                                     /ssssssssss\`                                           \`:ossssssssssssss+ssssssssssssso+.                                           -ssssssssss.                                                     
                                                     .ssssssssss:                                        \`.+sssssssssssssss/\` -+sssssssssssssso:\`                                       \`ossssssssso                                                      
                                                      ossssssssso\`                                    \`./ossssssssssssss+:\`     -+sssssssssssssso+-\`                                    :ssssssssss-                                                      
                                                      -ssssssssss+                                 \`./osssssssssssssss+-          \`/ssssssssssssssso/.\`                                .sssssssssso                                                       
                                                       +ssssssssss:                             \`-/ossssssssssssssso/.              .:ossssssssssssssso/-\`                            \`ossssssssss-                                                       
                                                       .sssssssssss/\`                       \`.-/ossssssssssssssss+-\`                  \`-/sssssssssssssssso/-.\`                       -ossssssssss/                                                        
                                                        -ssssssssssso:\`                \`..:/ossssssssssssssssso:.\`                       \`:+ssssssssssssssssso/--\`                 ./sssssssssss+\`                                                        
                                                         :sssssssssssso/-.\`      \`..-//ossssssssssssssssssso/.\`                             .:ossssssssssssssssssoo/:-..\`      \`.-/ssssssssssss+\`                                                         
                                                          -ossssssssssssssooooooossssssssssssssssssssssso/.\`                                  \`./ossssssssssssssssssssssoooooooossssssssssssss/\`                                                          
                                                           \`+ssssssssssssssssssssssssssssssssssssssso+:.                                          .:+ssssssssssssssssssssssssssssssssssssssso:                                                            
                                                             .+ssssssssssssssssssssssssssssssssso+:.\`                                                .-/ossssssssssssssssssssssssssssssssso:\`                                                             
                                                               ./osssssssssssssssssssssssssoo/:.\`                                                        .-:+ossssssssssssssssssssssssss+:\`                                                               
                                                                 \`.:+oosssssssssssssoooo/--\`\`                                                                \`.-//ooossssssssssssssoo/-.                                                                  
                                                                      \`.---:///:---.\`\`                                                                             \`\`.--://////:--.\`                                                                      
`}</ASCII></code>
);

export default ReactASCII;