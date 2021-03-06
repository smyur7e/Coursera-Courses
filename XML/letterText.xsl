<?xml version="1.0"?>
<xsl:stylesheet version="1.0"  
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">  
  <xsl:output method="text"/>  
  <xsl:template match="/letter">  
    <xsl:apply-templates select="*"/>  
  </xsl:template>  
  <xsl:template match="to">  
    TO: <xsl:apply-templates/>  
  </xsl:template>  
  <xsl:template match="from">  
    FROM: <xsl:apply-templates/>  
  </xsl:template>  
  <xsl:template match="message">  
    MESSAGE: <xsl:apply-templates/>  
  </xsl:template>  
 </xsl:stylesheet>