---
permalink: /video-sitemap.xsl
sitemap:
  exclude: 'yes'
---
<?xml version="1.0" encoding="UTF-8"?><xsl:stylesheet version="2.0"
	xmlns:html="http://www.w3.org/TR/REC-html40"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html>
	<head>
		<title>{{ site.title }}: XML Sitemap</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="{{ site.url }}/assets/css/main.css" />
	</head>
	<body>
		<div id="description">
			<h1>Video Sitemap</h1>
			<p>This is what search engines like Google use to find and understand the video content on this website.</p>
			<p>Learn more about <a href="https://developers.google.com/search/docs/advanced/sitemaps/video-sitemaps" target="_blank">Video Sitemap</a>.</p>
		</div>
		<div id="content">
			<p>This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url/video:video)"/></strong> URLs.</p>
			<p class="expl"><a href="{{ site.url }}/sitemap.xml">&#8592; Sitemap Index</a></p>
			<table id="sitemap" cellpadding="3" class="min">
				<thead>
					<tr>
						<th width="15%">Video</th>
						<th width="20%">Title</th>
						<th width="20%">Description</th>
						<th width="15%">Tags</th>
						<th width="15%">Category</th>
						<th width="15%">Last Mod.</th>
					</tr>
				</thead>
				<tbody>
					<xsl:for-each select="sitemap:urlset/sitemap:url">
						<xsl:for-each select="video:video">
							<tr>
								<td>
									<xsl:variable name="thumbURL">
										<xsl:value-of select="video:thumbnail_loc"/>
									</xsl:variable>

									<xsl:variable name="flvURL">
										<xsl:value-of select="video:player_loc"/>
									</xsl:variable>

									<a href="{$flvURL}">
										<xsl:choose>
											<xsl:when test="$thumbURL != ''">
												<img src="{$thumbURL}" width="80" height="60" />
											</xsl:when>
											<xsl:otherwise>
												-
											</xsl:otherwise>
										</xsl:choose>
									</a>
								</td>
								<td>
									<xsl:variable name="itemURL">
										<xsl:value-of select="../sitemap:loc"/>
									</xsl:variable>
									<a href="{$itemURL}">
										<xsl:value-of select="video:title"/>
									</a>
								</td>
								<td>
									<xsl:variable name="desc">
										<xsl:value-of select="video:description"/>
									</xsl:variable>
									<xsl:choose>
										<xsl:when test="string-length($desc) &lt; 200">
											<xsl:value-of select="$desc"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:value-of select="concat(substring($desc,1,200),' ...')"/>
										</xsl:otherwise>
									</xsl:choose>
								</td>
								<td>
									<xsl:for-each select="video:tag">
										<xsl:value-of select="."/>,
									</xsl:for-each>
								</td>
								<td>
									<xsl:value-of select="video:category"/>
								</td>
								<td>
									<xsl:value-of select="concat(substring(video:publication_date,0,11),concat(' ', substring(video:publication_date,12,5)),concat(' ', substring(video:publication_date,20,6)))"/>
								</td>
							</tr>
						</xsl:for-each>
					</xsl:for-each>
				</tbody>
			</table>
		</div>
	</body>
</html>
</xsl:template>

</xsl:stylesheet>
